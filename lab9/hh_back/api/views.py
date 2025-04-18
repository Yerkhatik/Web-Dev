from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Company,Vacancy
# Create your views here.
@csrf_exempt
def company_list(request):
    companies = Company.objects.all()
    company_json = [c.to_json() for c in companies]
    return JsonResponse(company_json,safe=False,json_dumps_params={'indent': 2})
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancy_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancy_json,safe=False,json_dumps_params={'indent': 2})

def company_detail(request,id):
        company = Company.objects.get(pk=id)
        return JsonResponse(company.to_json(),json_dumps_params={'indent': 2})

def vacancy_detail(request,id) :
     vacancy  = Vacancy.objects.get(pk = id)
     return JsonResponse(vacancy.to_json(),json_dumps_params={'indent': 2})


def top_ten(request):
     top = Vacancy.objects.all().order_by('-salary')[:2]
     top_json = [v.to_json() for v in top]
     return JsonResponse(top_json,safe=False,json_dumps_params={'indent': 2})

def company_vacancies(request,id):
     vacancies = [vacancy.to_json() for vacancy in Vacancy.objects.filter(company_id = id)]
     company_vacancy = {
          'vacancies':vacancies
     }
     return JsonResponse(company_vacancy,json_dumps_params={'indent': 2})
