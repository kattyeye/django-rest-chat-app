from django.urls import path

from . import views

app_name = 'chats'


urlpatterns = [
    path('rooms/<int:pk>/messages/<int:message>/',
         views.MessageDetailAPIView.as_view(), name="message_list_detail"),
    path('rooms/<int:pk>/messages/',
         views.MessageListAPIView.as_view(), name="message_list"),
    path('rooms/<int:pk>', views.RoomDetailAPIView.as_view(),
         name="room_list_detail"),
    path('rooms/', views.RoomListAPIView.as_view(), name="room_list"),
]
