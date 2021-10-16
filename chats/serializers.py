
from rest_framework import serializers

from .models import Room, Message


class MessageSerializer(serializers.ModelSerializer):
    user = serializers.CharField()

    class Meta:
        model = Message
        fields = ('id', 'text', 'user',)


class RoomSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    # user = MessageSerializer(many=True)

    class Meta:
        model = Room
        fields = ('id', 'name', 'messages', )  # users
