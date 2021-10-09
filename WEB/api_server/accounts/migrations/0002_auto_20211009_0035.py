# Generated by Django 3.2.7 on 2021-10-08 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='army_num',
            field=models.CharField(help_text='**-********', max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(help_text='본명', max_length=100),
        ),
    ]
