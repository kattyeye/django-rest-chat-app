
from rest_framework import serializers

from .models import Room, Message


class MessageSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source="user.username")

    class Meta:
        model = Message
        fields = ('id', 'text', 'username', 'chat_room')


class RoomSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = Room
        fields = ('id', 'name', 'messages', )
