
# AI Shell Helper
### Shell integration for ZSH and Bash to convert natural language text to linux shell commands right into the terminal backed by AWS Bedrock and Ollama (for locally hosted models)

Assure you have AWS credentials set on the system and appropriate Permission are set for AWS Bedrock Service.

Clone the project in your home directory

```sh
git clone https://github.com/azadsagar/ai-shell-helper.git
cd ai-shell-helper && npm install                               # Assuming nodejs and npm is installed
echo "source $HOME/ai-shell-helper/zsh_int.sh" >> ~/.zshrc      # For ZSH Shell
echo "source $HOME/ai-shell-helper/bash_int.sh" >> ~/.bashrc    # For Bash Shell
```

Required Environment variables

```sh
export INFERENCE_MODE="<ollama|aws_bedrock>"
export OLLAMA_URL="http://localhost:11434"              # if INFERENCE_MODE is set to ollama
export BEDROCK_FLOW_IDENTIFIER=<flowid or arn>
export BEDROCK_FLOW_ALIAS=<flow version alias or arn>
export AWS_REGION=us-east-1
```
