from typing import Match
from django.db import models

# Create your models here.


class Room(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Message(models.Model):
    text = models.CharField(max_length=255)
    chat_room = models.ForeignKey(Room, on_delete=models.CASCADE)

    def __str__(self):
        return self.chat_room.name
