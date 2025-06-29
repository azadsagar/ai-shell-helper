# Bash AI command expansion using bind -x

ai_cmd_function() {
  # Ensure the alias or path to your node script is correct
  local ai_cmd="node $HOME/ai-shell-helper/main.js"

  # Get the current input buffer (entire line)
  local input="$READLINE_LINE"

  # Call the AI command with the input and get output
  local output
  output=$(echo "$input" | $ai_cmd)

  # Replace the input buffer with AI-generated output
  READLINE_LINE="$output"
  READLINE_POINT=${#READLINE_LINE}
}

# Bind Ctrl-G to the function
bind -x '"\C-g":ai_cmd_function'

