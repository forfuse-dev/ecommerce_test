from django.shortcuts import render
from django.http import JsonResponse
from .models import User
from bot.auth import Authenticator
from bot.email_sender import EmailSender

def send_email_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        recipient = request.POST.get('recipient')
        subject = request.POST.get('subject')
        body = request.POST.get('body')

        authenticator = Authenticator()
        if authenticator.authenticate(username, password):
            email_sender = EmailSender()
            email_sender.send_email(recipient, subject, body)
            return JsonResponse({'status': 'success', 'message': 'Email sent successfully.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Authentication failed.'})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'})