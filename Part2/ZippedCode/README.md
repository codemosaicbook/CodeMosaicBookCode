# Application Code for Part 2 of CodeMosaic

Welcome to the `zippedcode` folder of Part 2: Crafting the Mosaic, accompanying the "CodeMosaic" book. This directory contains the zipped file of the full-stack application code discussed in the book. Follow the steps below to set up and run the application on your local machine.

## Getting Started

1. **Download the Zipped Code**: Click on the `AIDashBoardWebAPI.zip` file in this directory to download it.
2. **Unzip the File**: Once downloaded, unzip the file on your local machine to extract the application code.

## Setup Instructions

After unzipping the file, follow the detailed setup instructions provided in each mosaic tile of the "CodeMosaic" book. The book will guide you through:
- Installing necessary dependencies.
- Setting up your development environment.
- All the coding steps with design.

## Customizations

Before running the application, you will need to make a few important customizations:

### Change Connection Strings
- Locate the configuration files within the application code.
- Replace the default connection strings with your own database connection details.

### Update CORS Settings
- For web projects, navigate to the CORS configuration settings in the code.
- Update the settings to allow requests from your desired origins to match your development or production environments.

### Modify Azure Pipeline YAML File
- Find the `azure-pipelines-aidashboard-api.yml` and `azure-pipelines-aidashboard-ui.yml` file within the project.
- Update the YAML file as required to match your Azure DevOps setup. This may include changing the build paths, specifying your Azure subscription details, or modifying the deployment tasks.

## Running the Application

Once you have followed the setup instructions in the book, made the necessary customizations, and ensured all dependencies are installed, you can run the application:
- Use the command line to navigate to the project directory.
- Execute the run command specific to your project (e.g., `dotnet run` for .NET projects, `npm start` for Node.js projects).

Thank you for following along with "CodeMosaic". Happy coding!


