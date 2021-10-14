from django.shortcuts import get_object_or_404  # used in perform_create to
from rest_framework import generics
from .models import Room, Message
from .serializers import RoomSerializer, MessageSerializer
# Create your views here.


class RoomListAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class RoomDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class MessageListAPIView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        message_id = self.kwargs['message']
        return Message.objects.filter(message=message_id)

    def perform_create(self, serializer):
        message_instance = get_object_or_404(
            Message, id=self.kwargs['message'])  # this id comes from the url
        serializer.save(message=message_instance)


class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer