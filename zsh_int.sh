function ai-command-widget() {

  alias ai-cmd='node $HOME/ai-shell-helper/main.js'

  local input
  input="$LBUFFER"
  local cmdout
  cmdout=$(echo "$input" | ai-cmd)
  
  
  # Replace current buffer with AI-generated command
  LBUFFER="$cmdout"
}

# Register the widget
zle -N ai-command-widget


bindkey '^G' ai-command-widget
