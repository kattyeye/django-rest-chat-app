# Generated by Django 3.2.8 on 2021-10-13 20:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ChatRoom',
            new_name='Room',
        ),
    ]
