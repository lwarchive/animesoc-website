from django import forms

class EmailForm(forms.Form):
    email = forms.CharField(label="Enter Email", max_length=50)