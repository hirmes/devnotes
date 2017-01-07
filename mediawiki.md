# Mediawiki

### Convert to static html

```bash
wget --recursive --page-requisites --html-extension \
      --convert-links --no-parent -R "*Special*" -R "*action=*" \
      -R "*printable=*"  -R "*oldid=*" -R "*title=Talk:*" \
      -R "*limit=*" "http://foo.com/wiki/index.php\?title=Main_Page.htm"
```
<small>([Source](http://camwebb.info/blog/2012-12-20/))</small>