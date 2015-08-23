(function(){
  var plugin = function(converter) {
    filter = function(text) {
      text = text.replace(/(\\(?:~D){1,2})|\s*((?:~D){1,2})([\s\S]+?)\2/g, function(all, escape, tag, content){
        var ret = content
        try{
          if(escape){
            ret = all.substr(1);
          }
          else if(tag === '~D~D'){
            content = content.replace(/\s+(.*?)([\r\n]|$)/g, '$1');
            ret = '<div class="katex-block">'+katex.renderToString(content)+'</div>';
          }
          else{
            ret = '<span class="katex-inline">'+katex.renderToString(content)+'</div>';
          }
        }
        catch(e){}
        return ret;
      });
      return text;
    };
    return [
    { 
      type: 'lang', 
      filter: filter
    }
    ];
  };

  if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
    window.showdown.extensions.katex = plugin;
  }
  if (typeof module !== 'undefined') {
    module.exports = plugin;
  }
}());
