# Python Email Bot

This project is a Python-based email bot that automatically sends emails and authenticates users against a Django database. It is designed to streamline email communication and manage user authentication seamlessly.

## Project Structure

```
python-email-bot
├── bot
│   ├── __init__.py
│   ├── email_sender.py
│   ├── auth.py
│   └── database.py
├── django_project
│   ├── manage.py
│   ├── django_project
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── app
│       ├── __init__.py
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       └── admin.py
├── requirements.txt
└── README.md
```

## Features

- **Email Sending**: Automatically send emails using the `EmailSender` class.
- **User Authentication**: Authenticate users against the Django database using the `Authenticator` class.
- **Database Management**: Retrieve user information from the database with the `get_user_data` function.

## Requirements

- Python 3.x
- Django
- Additional email libraries (as specified in `requirements.txt`)

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd python-email-bot
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Set up the Django project:
   - Navigate to the `django_project` directory.
   - Run migrations:
     ```
     python manage.py migrate
     ```

4. Start the Django server:
   ```
   python manage.py runserver
   ```

## Usage

- To send an email, create an instance of the `EmailSender` class and call the `send_email` method with the recipient's email, subject, and body.
- To authenticate a user, create an instance of the `Authenticator` class and call the `authenticate` method with the username and password.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.