# Generated by Django 3.2.18 on 2023-04-02 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_delete_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='count',
            field=models.IntegerField(default=25),
        ),
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='product',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.FloatField(default=1000),
        ),
    ]
