# AI Shell Helper

### Convert Natural Language Input to Linux Shell Commands Using AWS Bedrock and Ollama

AI Shell Helper is a powerful utility designed for shell integration, enabling users to convert natural language text into executable Linux shell commands. By leveraging the capabilities of AWS Bedrock and locally hosted models via Ollama, it offers an innovative approach to interact with your terminal, making command execution more intuitive.

## Getting Started

To set up AI Shell Helper on your system:

1. Ensure you have Node.js and npm installed.
2. Clone this repository:
   ```sh
   git clone https://github.com/azadsagar/ai-shell-cmd.git
   ```
3. Install dependencies:
   ```sh
   cd ai-shell-cmd && npm install
   ```
4. Configure your shell to use AI Shell Helper by adding the following lines to your `.zshrc` or `.bashrc` file:
   - For ZSH:
     ```sh
     echo "source $HOME/ai-shell-helper/zsh_int.sh" >> ~/.zshrc
     ```
   - For Bash:
     ```sh
     echo "source $HOME/ai-shell-helper/bash_int.sh" >> ~/.bashrc
     ```

## Usage Examples

AI Shell Helper simplifies command execution through natural language. Here are some examples:

- natural language input `list all docker containers` translates to `docker ps -a`.
- Natural language input `delete all log files older than 30 days` translates to `sudo find /var/log -type f -mtime +30 -exec rm -f {} \;`

To activate model magic, type your Natural languge input on terminal and press **Ctrl + G**.

## Shortcut Instructions

After entering a natural language phrase into the terminal, use **Ctrl + G** to invoke model magic, transforming it into executable shell commands seamlessly. This shortcut enhances interaction efficiency with the tool.

## Contributing

We welcome contributions from everyone. If you're interested in helping improve AI Shell Helper, here's how:

1. Fork the repository.
2. Create a new branch for your feature or fix (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Submit a pull request.

For any issues, please report them on our [GitHub Issues page](https://github.com/azadsagar/ai-shell-cmd/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
