from django.core.management.base import BaseCommand
from positions.utils.yahoo_api import update_data  # Import the function you want to run

class Command(BaseCommand):
    help = 'Run my custom script when starting the server'

    def handle(self, *args, **options):
        update_data()  # Call the function from your script