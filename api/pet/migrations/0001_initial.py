# Generated by Django 4.1 on 2022-09-09 01:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('person', '0005_alter_person_mobile_alter_person_notes_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('birth_date', models.DateField()),
                ('specie', models.CharField(blank=True, max_length=100, null=True)),
                ('breed', models.CharField(blank=True, max_length=100, null=True)),
                ('address', models.CharField(max_length=100)),
                ('color', models.CharField(blank=True, max_length=100, null=True)),
                ('weight', models.FloatField(blank=True, null=True)),
                ('size', models.FloatField(blank=True, null=True)),
                ('status', models.CharField(choices=[('P', 'Pending'), ('A', 'Active'), ('I', 'Inactive')], max_length=1)),
                ('notes', models.TextField(blank=True, null=True)),
                ('score', models.FloatField(default=5)),
                ('id_person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='person.person')),
            ],
        ),
    ]