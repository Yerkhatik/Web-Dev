from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer1,CompanySerializer2

@api_view(['GET','POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies,many=True)
        return Response(
            serializer.data
        )
    if request.method == 'POST':
        # data = json.loads(request.body)
        serializer = CompanySerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','PUT','DELETE'])
def company_details(request,id):
    try:
        company = Company.objects.get(id=id)
    except:
        return Response({'error'},status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        serializer = CompanySerializer2(company,many=False)
        return Response(serializer.data)
    if request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True})
    if request.method == 'PUT':
        # data = json.loads(request.body)
        serializer = CompanySerializer2(instance=company,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)