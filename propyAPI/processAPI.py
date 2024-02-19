import json

# Path to the input and output files
input_file_path = 'miamiData.json'
output_file_path = 'miami.json'

# Read the input file
with open(input_file_path, 'r') as file:
    miami_data = json.load(file)

# Transform the data
transformed_data = []
for item in miami_data['data']['data']:
    transformed_item = {
        "location": item['metadata']['name'],
        "tokenId": item['token_id'],
        "imageIPFS": f"https://ipfs.io/ipfs/{item['metadata']['image'].split('://')[1]}"
    }
    transformed_data.append(transformed_item)

# Write the transformed data to the output file
with open(output_file_path, 'w') as file:
    json.dump(transformed_data, file, indent=2)

output_file_path
