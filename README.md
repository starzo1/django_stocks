# Django - React - REST Project

This is a sample project that demonstrates how to integrate Django with React and use Django REST framework to create a RESTful API. The project uses PostgreSQL as the database and assumes that you have it installed and configured on your system.

## How to set up the project

To set up the project, follow these steps:

1. Create a virtual environment for the project using `python -m venv venv` and activate it using `source venv/bin/activate` (on Linux or Mac) or `venv\Scripts\activate` (on Windows).
2. Install the requirements using `pip install -r requirements.txt`.
3. Connect to the PostgreSQL database using `psql -U postgres` and create a database for the project using `CREATE DATABASE finance;`.
4. Modify the `DATABASES` setting in the `finance_backend/settings.py` file to match your database credentials. For example:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'finance',
        'USER': 'postgres',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

5. Run the migrations using `python manage.py migrate` to create the tables in the database.
6. Create a superuser for the project using `python manage.py createsuperuser` and follow the prompts to enter your username, email, and password.
7. Run script `python manage.py run_yahoo_api` that fetches some example list of tickers info from `yfinance` API to fill in stock and pricing tables.
8. Launch the backend server using `python manage.py runserver` and check that it is running on `http://127.0.0.1:8000/`.
9. In another terminal, navigate to the `finance_frontend` folder and install the dependencies using `npm install`.
10. Launch the frontend server using `npm start` and check that it is running on `http://localhost:3000/`.

You have successfully set up the project!