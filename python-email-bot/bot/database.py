from django.contrib.auth.models import User
from django.db import connection

def get_user_data(user_id):
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM auth_user WHERE id = %s", [user_id])
        row = cursor.fetchone()
    if row:
        return {
            'id': row[0],
            'username': row[1],
            'email': row[2],
            'first_name': row[4],
            'last_name': row[5],
        }
    return None