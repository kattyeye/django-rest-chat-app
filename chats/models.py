from typing import Match
from django.db import models
from django.conf import settings
# Create your models here.


class Room(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Message(models.Model):
    text = models.CharField(max_length=255)
    chat_room = models.ForeignKey(
        Room, related_name="messages", on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.chat_room.name
