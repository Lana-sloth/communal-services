import { Component } from '@angular/core';

@Component({
  selector: 'communal',
  styleUrls: ['../../../app.component.css'],
  template: `  
    <div>
        <div>Тариф</div>
        <div>
            <span>ХВС:</span>
            <input #CW_tax type='number'/>
        </div> 
        <div>
            <span>ГВС:</span>
            <input #HW_tax type='number'/>
        </div>
        <div>
            <span>Эл. день:</span>
            <input #ED_tax type='number'/>
        </div>
        <div>
            <span>Эл. ночь:</span>
            <input #EN_tax type='number'/>
        </div>
    </div>

    <hr>
    
    <div>
        <div>Потрачено в прошлый раз</div>
        <div>
            <span>ХВС:</span>
            <input #CW_last type='number'/>
        </div> 
        <div>
            <span>ГВС:</span>
            <input #HW_last type='number'/>
        </div>
        <div>
            <span>Эл. день:</span>
            <input #ED_last type='number'/>
        </div>
        <div>
            <span>Эл. ночь:</span>
            <input #EN_last type='number'/>
        </div>
    </div>
    
    <hr>

    <div>
        <div>Потрачено на текущий момент</div>
        <div>
            <span>ХВС:</span>
            <input #CW_current type='number'/>
        </div>
        <div>
            <span>ГВС:</span>
            <input #HW_current type='number'/>
        </div>
        <div>
            <span>Эл. день:</span>
            <input #ED_current type='number'/>
        </div> 
        <div>
            <span>Эл. ночь:</span>
            <input #EN_current type='number'/>
        </div>
    </div>
    <hr>
    <br>
    <button (click)='countTotal(
        CW_tax.value, CW_last.value, CW_current.value,
        HW_tax.value, HW_last.value, HW_current.value,
        ED_tax.value, ED_last.value, ED_current.value,
        EN_tax.value, EN_last.value, EN_current.value
    )'>
    Рассчитать
    </button>
    
    <div>Потрачено всего</div>
    <div>ХВС: {{ CW_spent || '' }}</div>
    <div>ГВС: {{ HW_spent || '' }}</div>
    <div>Эл. день: {{ ED_spent || '' }}</div>
    <div>Эл. ночь: {{ EN_spent || '' }}</div>
    <div>Итого: {{ total || '' }}</div>
  `
})
export class CommunalComponent {
    // TAX
    CW_tax: number = 0;
    HW_tax: number = 0;
    ED_tax: number = 0;
    EN_tax: number = 0;
    // LAST TIME
    CW_last: number = 0;
    HW_last: number = 0;
    ED_last: number = 0;
    EN_last: number = 0;
    // CURRENT TIME
    CW_current: number = 0;
    HW_current: number = 0;
    ED_current: number = 0;
    EN_current: number = 0;
    // SPENT TOTAL
    CW_spent: number = 0;
    HW_spent: number = 0;
    ED_spent: number = 0;
    EN_spent: number = 0;

    total: number = 0;

    countTotal(
        CW_tax: number, CW_last: number, CW_current: number,
        HW_tax: number, HW_last: number, HW_current: number,
        ED_tax: number, ED_last: number, ED_current: number,
        EN_tax: number, EN_last: number, EN_current: number
    ) {
        // TAX
        this.CW_tax = Number(CW_tax);
        this.HW_tax = Number(HW_tax);
        this.ED_tax = Number(ED_tax);
        this.EN_tax = Number(EN_tax);
        // LAST TIME
        this.CW_last = Number(CW_last);
        this.HW_last = Number(HW_last);
        this.ED_last = Number(ED_last);
        this.EN_last = Number(EN_last);
        // CURRENT TIME
        this.CW_current = Number(CW_current);
        this.HW_current = Number(HW_current);
        this.ED_current = Number(ED_current);
        this.EN_current = Number(EN_current);
        // SPENT TOTAL
        this.CW_spent = (CW_current - CW_last) * CW_tax;
        this.HW_spent = (HW_current - HW_last) * HW_tax;
        this.ED_spent = (ED_current - ED_last) * ED_tax;
        this.EN_spent = (EN_current - EN_last) * EN_tax;

        this.total = this.CW_spent + this.HW_spent + this.ED_spent + this.EN_spent;
    }; 
}
