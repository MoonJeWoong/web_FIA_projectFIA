# Generated by Django 3.2.7 on 2021-09-26 02:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0004_auto_20210925_2334'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='place',
            field=models.TextField(default=1, max_length=500),
            preserve_default=False,
        ),
    ]