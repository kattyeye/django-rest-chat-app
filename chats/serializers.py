from rest_framework import serializers

from .models import Room, Message


class RoomSerializer(serializers.ModelSerializer):
    messages = serializers.StringRelatedField(many=True)

    class Meta:
        model = Room
        fields = ('id', 'name', 'messages',)


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'text',)
