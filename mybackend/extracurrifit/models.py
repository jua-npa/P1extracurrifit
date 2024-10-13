from django.db import models

# Create your models here.
class StudentGroup(models.Model):
    id_group = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        db_table = 'student_groups'

    def __str__(self):
        return self.name

