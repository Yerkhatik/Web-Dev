from django.shortcuts import render
import json
from django.http.response import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from api.serializers import CompanySerializer1
from api.serializers import CompanySerializer2

# Create your views here.



@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)

        # companies_json = [company.to_json() for company in companies]
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(company.to_json())


@csrf_exempt
def company_details(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.save()
        return JsonResponse(company.to_json())

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def company_vacancies(request, company_id):
    try:
        # vacancies = Company.objects.get(id=company_id).vacancies.all()
        vacancies = Vacancy.objects.all().filter(company=company_id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancies.name = data['name']
        vacancies.save()
        return JsonResponse(vacancies.to_json())

    elif request.method == 'DELETE':
        vacancies.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_details(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.save()
        return JsonResponse(vacancy.to_json())

    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


def vacancies_top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(vacancy.to_json())







# from django.shortcuts import render
# from django.http.response import HttpResponse
# from api.models import Company, Vacancy
# from django.http import JsonResponse
# from django.core import serializers
#
# def home(request):
#     return HttpResponse('home page')
#
# def companies_list(request):
#     companies = Company.objects.all()
#     companies_json = [c.to_json() for c in companies]
#     return JsonResponse(companies_json, safe=False)
#
# def company_details(request, company_id):
#     try:
#         company = Company.objects.get(id=company_id)
#     except Company.DoesNotExist as exception:
#         return JsonResponse({'exception': str(exception)}, status=400)
#     return JsonResponse(company.to_json())
#
# def company_vacancies(request, company_id):
#     try:
#         vacancies = Vacancy.objects.all().filter(company=company_id)
#         # vacancies_json = serializers.serialize('json', vacancies)
#         vacancies_json = [vacancy.to_json() for vacancy in vacancies]
#     except Company.DoesNotExist as exception:
#         return JsonResponse({'exception': str(exception)}, status=400)
#     return JsonResponse(vacancies_json, safe=False)
#
# # def company_vacancies(request, company_id):
# #     try:
# #         vacancies = Company.objects.get(id=company_id)
# #     except Company.DoesNotExist as exception:
# #         return JsonResponse({'exception': str(exception)}, status=400)
# #
# #     vacancies_json = [vacancy.to_json() for vacancy in vacancies]
# #     return JsonResponse(vacancies_json, safe=False)
#
# def vacancies_list(request):
#     vacancies = Vacancy.objects.all()
#     vacancies_json = [v.to_json() for v in vacancies]
#     return JsonResponse(vacancies_json, safe=False)
#
# def vacancy_details(request, vacancy_id):
#     try:
#         vacancy = Vacancy.objects.get(id=vacancy_id)
#     except Vacancy.DoesNotExist as exception:
#         return JsonResponse({'exception': str(exception)}, status=400)
#     return JsonResponse(vacancy.to_json())
#
# def vacancies_top_ten(request):
#     vacancies = Vacancy.objects.all().order_by('-salary')
#     vacancies = vacancies[0:10]
#     vacancies_json = [v.to_json() for v in vacancies]
#     return JsonResponse(vacancies_json, safe=False)
