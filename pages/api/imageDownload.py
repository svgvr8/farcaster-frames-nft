import requests
import os
import json

def download_images(data, folder_path):
    """
    Download images from IPFS URLs and save them in the specified folder with names based on tokenId.
    Assign a default file extension since IPFS URLs may not contain one.
    """
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    default_extension = '.jpg'  # Default file extension

    for item in data:
        image_url = item['imageIPFS']
        token_id = item['tokenId']
        filename = f"{token_id}{default_extension}"  # Assign the default file extension
        file_path = os.path.join(folder_path, filename)

        # Download and save the image
        response = requests.get(image_url)
        if response.status_code == 200:
            with open(file_path, 'wb') as file:
                file.write(response.content)
        else:
            print(f"Failed to download image for tokenId {token_id}")

# Specify the folder path for saving images
images_folder_path = 'images'

# Load JSON data from the file
with open("miami.json", 'r') as file:
    json_data = json.load(file)

# Call the function to download and save images
download_images(json_data, images_folder_path)
