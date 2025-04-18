from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Company, Vacancy
from api.serializers import VacancySerializer1,VacancySerializer2
from rest_framework import status
import json
class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies,many=True)
        return Response(serializer.data)
    def post(self, request):
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_company = Company.objects.get(id=data.get('company',''))
        vacancy = Vacancy.objects.create(name=vacancy_name,company=vacancy_company)
        return Response(vacancy.to_json())
class VacancyByIdAPIView(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except:
            return Response({'error'}, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request):
        instance = self.get_object(id)
        serializer = VacancySerializer2(instance)
        return Response(serializer.data)
    def put(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer2(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,id):
        instance = self.get_object(id)
        instance.delete()
        return Response({'deleted': True})