<!-- All the folder structure information -->
=> Before you start:
   - I have already created all the folders which you will need during journey.

   - If you are doing creating any folders then please inform the team members that you have created a folder with following name.

   - I have already setup all the things related to `Chakra UI` and `react-router-dom` 
     You guys have to just start developments.
     if you want to work on redux the there will be a folder with store file also present there.

   - Also given you sample `Navbar` and `Footer` components.

   - You will get all the routing files in `routes` folder.

   - You can also use context-api if needed.

   - All the end-points and base-url should be in env files.
   
   - Use `assets` folder for images,pdf,video..etc
   - Use `components` folder for making components either in folder or without folder 
     just be sure naming should not match with other folder/file to avoid collision
   - Use `pages` folder to create all the pages
   - Use `routes`  folder to all the routing related stuffs
   - Use `scripts` folder for any js script you wanna write.(this folder helps you to 
     keep jsx and js folder separate)
   - Use `styles` folder to keep your all css files.
   - Use `constants` folder to create all the constants (Helps you reducing hard-coding)(Most recommended)

<!-- Cloning related and Getting started related stuffs -->
=> Clone the directory to start work `git clone  https://github.com/itsAkash12/organic-pets-4780.git`

=> Ok guys here are the some basic instruction before you start , If you are here you are successfully pulled the code and you are ready to type you first command in terminal.

Step-1- Navigate to proeject directory using `cd organic-pets-4780`

Step-2- install node_modules using `npm install`

Step-3- install some common dependencies:- <br />
            - `npm install react-router-dom redux react-redux redux-thunk axios`<br />
            - `npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion`

<!-- Git related stuffs -->
=> Some basic requirements(Mandatory):
       1- You have to work in daily branches manner, so you have to create
          new branch everyday . So you have make branch using your student_code 
          followed the day in which you working. below is the eg for my branches.

               - branch-naming style: fw21_XXXX_day-x

            -for day-2 branch name should be: fw20_1302_day-2
            -for day-3 branch name should be: fw20_1302_day-3
            -for day-4 branch name should be: fw20_1302_day-4
            -for day-5 branch name should be: fw20_1302_day-5

        2- How to create branches:
            - $git branch <branch-name> (without angle brackets)
        
        3- How to switch branches:
            -$git switch <branch-name>  (without angle brackets)
        
        4- How to pull:
            -$git pull origin <branch-name>    (without angle brackets)


=> Some helpful Tools during development :<br />
    - Chakra-UI - https://chakra-ui.com/<br />
    - Chakra-Templets - https://chakra-templates.dev/#<br />
    - String Builder - https://codebeautify.org/string-builder<br />
    - Chat-gpt - https://chat.openai.com/chat<br />


# Work Flow Chart

Kirti - Backend

# Endpoints
`/users`
`/products`
* Make the necessary thngs from your side like cart or orders backend. Here i have provided a refrence where you can work upon.

# Schemas

  `Product Schema`
```
{   
    "id":0,
    "images":["" , ""],
    "name":"",
    "short_desc":"",
    "long_desc":"",
    "price":0,
    "strike_price":0,
    "ratings":0,
    "colors":"green",
    "delivery_time":3,
    "sizes":""

} 
```



  `User Schema`
  
```
{
   "id":0,   
  "name": "",
  "email": "",
  "password": "",
  "account": {
    "cart": [
      {"id":0,
        "images": ["", ""],
        "name": "",
        "short_desc": "",
        "long_desc": "",
        "price": 0,
        "strike_price": 0,
        "ratings": 0,
        "colors":"",
        "delivery_time": 0,
        "sizes":"",
        "quantity":0
      },
      {
        "id":1,
        "images": ["", ""],
        "name": "",
        "short_desc": "",
        "long_desc": "",
        "price": 0,
        "strike_price": 0,
        "ratings": 0,
        "colors":"",
        "delivery_time": 0,
        "sizes":"",
        "quantity":0
      }
    ],
    "orders": [{
        "id":0,
        "images": ["", ""],
        "name": "",
        "short_desc": "",
        "long_desc": "",
        "price": 0,
        "strike_price": 0,
        "ratings": 0,
        "colors":"",
        "delivery_time": 0,
        "sizes":"",
        "quantity":0,
        "address":""
    }]
  }
}
```
- `Whole Database look after making request will be like this ==>`

```
 
 {
  "users": [
    {
     "id":0,   
    "name": "user-1",
    "email": "",
    "password": "",
    "account": {
      "cart": [
        {"id":0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors":"",
          "delivery_time": 0,
          "sizes":"",
          "quantity":0
        },
        {
          "id":1,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors":"",
          "delivery_time": 0,
          "sizes":"",
          "quantity":0
        }
      ],
      "orders": [{
          "id":0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors":"",
          "delivery_time": 0,
          "sizes":"",
          "quantity":0,
          "address":""
      }]
    }
  },{
    "id":1,   
    "name": "user-2",
    "email": "",
    "password": "",
    "account": {
      "cart": [
        {"id":0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors":"",
          "delivery_time": 0,
          "sizes":"",
          "quantity":0
        },
        {
          "id":1,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors":"",
          "delivery_time": 0,
          "sizes":"",
          "quantity":0
        }
      ],
      "orders": [{
          "id":0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors":"",
          "delivery_time": 0,
          "sizes":"",
          "quantity":0,
          "address":""
      }]
    }
  }
  
  ],

PRODUCTS ==>

  "products": [

    {
      "id": "category-name-1",
      "items": [
        {
          "id": 0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors": "",
          "delivery_time": 0,
          "sizes": ""
        },
        {
          "id": 1,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "strike_price": 0,
          "ratings": 0,
          "colors": "",
          "delivery_time": 0,
          "sizes": ""
        }
      ]
    },

    {
        "id": "category-name-2",
        "items": [
          {
            "id": 0,
            "images": ["", ""],
            "name": "",
            "short_desc": "",
            "long_desc": "",
            "price": 0,
            "strike_price": 0,
            "ratings": 0,
            "colors": "",
            "delivery_time": 0,
            "sizes": ""
          },
          {
            "id": 1,
            "images": ["", ""],
            "name": "",
            "short_desc": "",
            "long_desc": "",
            "price": 0,
            "strike_price": 0,
            "ratings": 0,
            "colors": "",
            "delivery_time": 0,
            "sizes": ""
          }
        ]
      }

  ]

  
}

```


# Pages  
  These are the pages we need in this project.

   //Akash
   - `HomePage`
   - `navbar`
   - `footer`
   - `admin panel`

   // Gaurav
   - `SignupPage`
   - `LoginPage`
   - `Data Collection`
   *try to make a cool UI*


   //Rahul
   - `Category wise ProductPage`
   - `single product page`
   *try to make a cool UI*


   //Devender
   - `CartPage` 
   - `Checkout-Page`
   - `Payment Integraton page`
   *try to make a cool UI*

<=====>PLEASE NOTE<=====>

* Try to make a Good and Smooth UI because the Website which Looks good is also Feels good.
* It will be our Last Project so lets make it fully functional and responsive and make it qualify to our resume/portfolio.

***************************************************************** All the best guys ******************************************************************* 