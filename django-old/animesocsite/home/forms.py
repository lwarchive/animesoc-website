from django import forms

class EmailForm(forms.Form):
    email = forms.EmailField(label="Enter email", max_length=50)