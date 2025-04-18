from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    descriprtion = models.TextField(default='')
    city = models.CharField(max_length=255,default='')
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.descriprtion,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    salary = models.FloatField(default=42500)
    company = models.ForeignKey(Company, on_delete=models.CASCADE,default=0)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.name}'

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name,
            'description': self.description,
            'salary' : self.salary,
            # 'company': self.company
        }