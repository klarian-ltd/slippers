---
sidebar_position: 6
---

# Template tags and filters

## attrs

The `attrs` tag is a handy shortcut that outputs template variables as element attributes.

```django
{# Usage #}
{% with foo="one" bar="two" baz="three" %}
  {% attrs foo bar baz %}
{% endwith %}

{# Output #}
foo="one" bar="two" baz="three"
```

The parameters passed to `attrs` are used for both the "key" of the attribute and the name of the variable to source its value from.

Another example:

```django
{# input_field component #}
<input {% attrs type id name %}>

{# Usage #}
{% input_field type="text" id="first_name" name="first_name" %}

{# Output #}
<input type="text" id="first_name" name="first_name" />
```

Boolean values are treated differently. `True` values become empty attributes, and `False` values aren't returned at all.

```django
{# button component #}
<button {% attrs disabled %}>{{ children }}</button>

{# Usage #}
{% #button disabled=True %}Can't click me{% /button %}
{% #button disabled=False %}Click me{% /button %}

{# Output #}
<button disabled>Can't click me</button>
<button>Click me</button>
```

It's possible to specify the source of the attribute value by writing it as a keyword argument. This is useful if the attribute name is different from the variable you want to get it from.

```django
{# input_field component #}
<input {% attrs type id=field_id name %}>

{# Usage #}
{% input_field type="text" field_id="first_name" name="first_name" %}

{# Output #}
<input type="text" id="first_name" name="first_name" />
```

## fragment

The `fragment` tag allows HTML to be assigned to variables.

```django
{% fragment as my_fragment %}
  <p>Hello, World!</p>
{% endfragment %}

{# Output the HTML #}
{{ my_fragment }}

{# Pass it around #}
{% my_component content=my_fragment %}
{% include "my_app/my_other_component.html" with content=my_fragment %}
```

One handy use for `fragment` is string interpolation using DTL.

```django
{% fragment as title %}
{{ items|floatformat:2 }} items found.
{% endfragment %}

{% list_item title=title %}
```

## match

The `match` filter outputs a string whose key matches the variable's value.

```django
{% with first="outline" second="ghost" third="square" %}
  <button class="{{ first|match:"outline:btn-outline,ghost:btn-ghost" }}">Click me</button>
  <button class="{{ second|match:"outline:btn-outline,ghost:btn-ghost" }}">Click me</button>
  <button class="{{ third|match:"outline:btn-outline,ghost:btn-ghost" }}">Click me</button>
{% endwith %}

{# Output #}
<button class="btn-outline">Click me</button>
<button class="btn-ghost">Click me</button>
<button class="">Click me</button>
```

The syntax is:

```
{{ variable|match:"key1:value1,key2:value2,key3:value3" }}
```

Tip: You can use the `default` filter if you want a default value.

```django
{% with my_variable="nomatch" %}
  <button class="{{ my_variable|match:"outline:btn-outline,ghost:btn-ghost"|default:"btn" }}">Click me</button>
{% endwith %}

{# Output #}
<button class="btn">Click me</button>
```

## var

The `var` tag allows for assigning values to variables.

```django
{% var foo="Hello, World!" %}

<div>{{ foo }}</div>

{# Output #}
<div>Hello, World!</div>
```

The `var` tag is intended to be used inside component templates as a means to document the variables it requires and specify defaults.

```django title="button.html"
{% var variant=variant|default:"primary" %}

<button class="{{ variant|match:"outline:btn-outline,ghost:btn-ghost" }}">{{ children }}</button>
```