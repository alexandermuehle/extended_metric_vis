import 'plugins/extended_metric_vis/extended_metric_vis.less';
import 'plugins/extended_metric_vis/extended_metric_vis_controller';
import {VisFactoryProvider} from 'ui/vis/vis_factory';
import {VisSchemasProvider} from 'ui/vis/editors/default/schemas';
import extendedMetricVisTemplate from 'plugins/extended_metric_vis/extended_metric_vis.html';
import metricVisParamsTemplate from 'plugins/extended_metric_vis/extended_metric_vis_params.html';
import {VisTypesRegistryProvider} from 'ui/registry/vis_types';
import {CATEGORY} from 'ui/vis/vis_category';

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(ExtendedMetricVisProvider);

function ExtendedMetricVisProvider(Private) {
    const VisFactory = Private(VisFactoryProvider);
    const Schemas = Private(VisSchemasProvider);

    return VisFactory.createAngularVisualization({
        name: 'extended_metric',
        title: 'Extended Metric',
        icon: 'fa-calculator',
        description: 'Based on the core Metric-Plugin but gives you the ability to output custom aggregates on metric-results.',
        category: CATEGORY.OTHER,
        visConfig: {
            defaults: {
                handleNoResults: true,
                fontSize: 60,
                outputs: [
                    {
                        formula: 'metrics[0].value * metrics[0].value',
                        label: 'Count squared',
                        enabled: true
                    }
                ]
            },
            template: extendedMetricVisTemplate
        },
        editorConfig: {
            optionsTemplate: metricVisParamsTemplate,
            schemas: new Schemas([
                {
                    group: 'metrics',
                    name: 'metric',
                    title: 'Metric',
                    min: 1,
                    defaults: [
                        {type: 'count', schema: 'metric'}
                    ]
                }
            ])
        }
    });
}

// export the provider so that the visType can be required with Private()
export default ExtendedMetricVisProvider;
