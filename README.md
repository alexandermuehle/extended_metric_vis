# Kibana Extended Metric Plugin

This is a plugin for [Kibana 6.x](https://www.elastic.co/products/kibana).
It is based on the core Metric-Plugin but gives you the ability to output custom aggregates on metric-results by using custom formula and/or JavaScript.

Based on this deposit (https://github.com/ommsolutions/kibana_ext_metrics_vis)

## Installation
(only works for some Kibana 5.x-versions (sorry, I don't have the time to release a new version for every update, but you can choose the closest version and simply adjust the version-number in the `package.json`))

**6.2.2**

```sh
$ ./bin/kibana-plugin install https://github.com/Nohame/extended_metric_vis/releases/download/6.2.2.1/kibana_ext_metrics_vis-6.2.2.zip
```

### Manual
Extract the ZIP into a new folder in your `kibana/plugins`-directory.

## Uninstall

Simply delete that folder and restart kibana.
