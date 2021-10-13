from django.urls import path

from . import views

app_name = 'chats'


urlpatterns = [

    path('rooms/<int:pk>', views.RoomDetailAPIView.as_view(), name="room_list"),
    path('rooms/', views.RoomListAPIView.as_view(), name="room_list"),
]
