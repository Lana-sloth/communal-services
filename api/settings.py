import os
import secret

MONGO_HOST = os.environ.get('MONGO_HOST', secret.MONGO_HOST)
MONGO_PORT = os.environ.get('MONGO_PORT', secret.MONGO_PORT)
MONGO_USERNAME = os.environ.get('MONGO_USERNAME', secret.MONGO_USERNAME)
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD', secret.MONGO_PASSWORD)
MONGO_DBNAME = os.environ.get('MONGO_DBNAME', secret.MONGO_DBNAME)

RESOURCE_METHODS = ['GET', 'POST']
ITEM_METHODS = ['GET', 'PUT', 'DELETE']
IF_MATCH = False
X_DOMAINS = '*'

cs_bills = {
    'item_title': 'cs_bill',
    'additional_lookup': {
        'url': 'regex("[\w]+")',
        'field': '_id'
    },
    'schema': {
        'date': {
            'schema': {
                'year': {
                    'type': 'integer',
                    'min': 2017
                },
                'month': {
                    'type': 'integer',
                    'min': 1,
                    'max': 12
                }
            },
            'type': 'dict',
            'required': True,
            'unique': True
        },
        'cold_water': {
            'type': 'float',
            'min': 0,
            'required': True
        },
        'hot_water': {
            'type': 'float',
            'min': 0,
            'required': True
        },
        'electricity_day': {
            'type': 'float',
            'min': 0,
            'required': True
        },
        'electricity_night': {
            'type': 'float',
            'min': 0,
            'required': True
        },
        'taxes': {
            'type': 'dict',
            'schema': {
                'cold_water_tax': {
                    'type': 'float',
                    'min': 0,
                    'required': True
                },
                'hot_water_tax': {
                    'type': 'float',
                    'min': 0,
                    'required': True
                },
                'electricity_day_tax': {
                    'type': 'float',
                    'min': 0,
                    'required': True
                },
                'electricity_night_tax': {
                    'type': 'float',
                    'min': 0,
                    'required': True
                }
            }
        }
    }
}

DOMAIN = {
    'cs_bills': cs_bills
}