# Generated by Django 4.1 on 2022-08-15 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0004_alter_person_email_alter_person_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='mobile',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='phone',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='score',
            field=models.FloatField(default=5),
        ),
    ]