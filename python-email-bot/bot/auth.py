class Authenticator:
    def __init__(self, user_model):
        self.user_model = user_model

    def authenticate(self, username, password):
        try:
            user = self.user_model.objects.get(username=username)
            if user.check_password(password):
                return user
            else:
                return None
        except self.user_model.DoesNotExist:
            return None