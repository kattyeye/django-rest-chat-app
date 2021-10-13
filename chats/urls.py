from django.urls import path

from . import views

app_name = 'chats'


urlpatterns = [

    path('', views.ChatListAPIView.as_view(), name="chat_list"),
]
