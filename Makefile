styles = $(wildcard assets/*.css)

style.css: $(styles)
	cat $(styles) | sed -r ':a;N;$$!ba;s/\n//g;s/([:,]) /\1/g;s/ ([{}])/\1/g;s/ > />/g;s/\t//g;s/ {2,}/ /g;' > $@

clean:
	rm style.css
