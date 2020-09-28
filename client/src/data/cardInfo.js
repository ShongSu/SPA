const CARDS_INFO = [
    {
        'id':1,
        "bank": "Scotiabank",
        "type": "Amex",
        "name": "Gold American Express®",
        'url': "scotia/ScotiaGoldAmex",
        "anunal_fee": 120,
        "additional_fee": 29,
        "minimun_limit": 5000,
        "rewards": {
            "grocery": 5,
            "restaurants": 5,
            "entertainment": 5,
            "gas": 3,
            "daily_transit": 3,
            "streaming_services": 3,
            "others": 1
        },
        "foreign_tx": false,
        "insurance": {},
        "special": {}
    },
    {
        'id':2,
        "bank": "Scotiabank",
        "type": "Visa",
        "name": "Passport™ Visa Infinite",
        'url': "scotia/ScotiaPassportVisaInfinite",
        "anunal_fee": 139,
        "additional_fee": 0,
        "minimun_limit": 5000,
        "rewards": {
            "grocery": 2,
            "restaurants": 2,
            "entertainment": 2,
            "daily_transit": 2,
            "others": 1
        },
        "foreign_tx": false,
        "insurance": {},
        "special": {}
    },
    {
        'id':3,
        "bank": "Rogersbank",
        "type": "MasterCard",
        "name": "World Elite® Mastercard",
        'url': "RogersBank",
        "anunal_fee": 0,
        "additional_fee": 0,
        "minimun_limit": 0,
        "rewards": {
            "others": 1.5
        },
        "foreign_tx": true,
        "insurance": {},
        "special": {
            "us_dollar": 3
        }
    }, {
        'id':4,
        "bank": "HSBC",
        "type": "MasterCard",
        "name": "World Elite® Mastercard",
        'url': "HSBCElite",
        "anunal_fee": 149,
        "additional_fee": 50,
        "minimun_limit": 0,
        "rewards": {
            "treval": 3,
            "others": 1.5
        },
        "foreign_tx": false,
        "insurance": {},
        "special": {
            'treval_credit': 100
        }
    }, {
        'id':5,
        "bank": "Scotiabank",
        "type": "Visa",
        "name": "Momentum® Visa",
        'url': "scotia/ScotiaMomentumVisa",
        "anunal_fee": 39,
        "additional_fee": 15,
        "minimun_limit": 500,
        "rewards": {
            "gas": 2,
            "grocery": 2,
            "durg_store": 2,
            "recurring_bills": 2,
            "others": 1
        },
        "foreign_tx": true,
        "insurance": {},
        "special": {
        }
    },{
        'id':6,
        "bank": "Scotiabank",
        "type": "Amex",
        "name": "American Express®",
        'url': "scotia/ScotiaAmex",
        "anunal_fee": 0,
        "additional_fee": 0,
        "minimun_limit": 1000,
        "rewards": {
            "others": 1
        },
        "foreign_tx": true,
        "insurance": {},
        "special": {
        }
    },{
        'id':7,
        "bank": "Scotiabank",
        "type": "Visa",
        "name": "Momentum® Visa Infinite",
        'url': "scotia/ScotiaMomentumVisaInfinite",
        "anunal_fee": 120,
        "additional_fee": 50,
        "minimun_limit": 5000,
        "rewards": {
            "subscription": 4,
            "grocery": 4,
            "recurring_bills": 4,
            "daily_transit": 2,
            "gas": 2,
            "others": 1
        },
        "foreign_tx": true,
        "insurance": {},
        "special": {
        }
    },{
        'id':8,
        "bank": "Amex",
        "type": "Amex",
        "name": "America Express Cobalt",
        'url': "amex/AmexCobalt",
        "anunal_fee": 120,
        "additional_fee": 0,
        "minimun_limit": 0,
        "rewards": {
            "restaurants": 5,
            "gas": 2,
            "travel":2,
            "daily_transit": 2,
            "others": 1
        },
        "foreign_tx": true,
        "insurance": {},
        "special": {
        }
    },{
        'id':9,
        "bank": "BMO",
        "type": "MasterCard",
        "name": "BMO World Elite® Mastercard",
        'url': "bmo/BMOWorldElite",
        "anunal_fee": 150,
        "additional_fee": 50,
        "minimun_limit": 0,
        "rewards": {
            "restaurants": 2.14,
            "travel":2.14,
            "entertainment": 2.14,
            "others": 1.42
        },
        "foreign_tx": true,
        "insurance": {},
        "special": {
        }
    },,{
        'id':10,
        "bank": "MBNA",
        "type": "MasterCard",
        "name": "Amazon.ca Rewards Mastercard",
        'url': "mbna/MBNAAmazonRewards",
        "anunal_fee": 0,
        "additional_fee": 0,
        "minimun_limit": 0,
        "rewards": {
            "others": 1
        },
        "foreign_tx": true,
        "insurance": {},
        "special": {
            'amazon': 1.5,
            'whole_food': 1.5,
            'foreign_currency ': 1
        }
    }]

const CATEGORIES = {
    "grocery": "Grocery",
    "restaurants": "Restaurants",
    "entertainment": "Entertainment",
    "gas": "Gas",
    "daily_transit": "Daily Transit",
    "streaming_services": "Streaming Services",
    "treval": "Treval",
    "durg_store": "Durg Store",
    "recurring_bills": "Recurring Bills",
    "subscription": "Subscription",
    "others": "Everything Else"
}

const CONSTANTS = {
    CARDS_INFO,
    CATEGORIES
}

export default CONSTANTS;