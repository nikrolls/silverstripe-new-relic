if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
    if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
}else {
    ss.i18n.addDictionary('en_US', {
        'NewRelicPerformanceReport.LOAD_ERROR': 'Failed to retrieve data from New Relic',
        'NewRelicPerformanceReport.NOT_AVAILABLE': 'N/A',
        'NewRelicPerformanceReport.SERVER_RESPONSE_TIME': 'Server Response Time',
        'NewRelicPerformanceReport.TIME_TO_TIME_PLURAL': '_%s minutes from %s - %s',
        'NewRelicPerformanceReport.TIME_TO_TIME': '%s minute from %s - %s',
        'NewRelicPerformanceReport.AVERAGE_VALUE': '%s average',
        'NewRelicPerformanceReport.MAX_VALUE': '%s maximum',
        'NewRelicPerformanceReport.MIN_VALUE': '%s minimum',
        'NewRelicPerformanceReport.AMOUNT_REQUESTS': '%s requests',
        'NewRelicPerformanceReport.SERVER_REQUESTS': 'Server Requests',
        'NewRelicPerformanceReport.VISITOR_REQUESTS': 'Visitor Requests',
        'NewRelicPerformanceReport.RPM_VALUE': '%s rpm',
        'NewRelicPerformanceReport.RPM_SHORT_VALUE': '%srpm',
        'NewRelicPerformanceReport.SERVER_APDEX': 'Server Apdex',
        'NewRelicPerformanceReport.VISITOR_APDEX': 'Visitor Apdex',
        'NewRelicPerformanceReport.SATISFIED_VALUE': 'Satisfied: %s',
        'NewRelicPerformanceReport.TOLERATING_VALUE': 'Tolerating: %s',
        'NewRelicPerformanceReport.FRUSTRATED_VALUE': 'Frustrated: %s',
        'NewRelicPerformanceReport.APDEX_EXCELLENT': 'Excellent',
        'NewRelicPerformanceReport.APDEX_GOOD': 'Good',
        'NewRelicPerformanceReport.APDEX_FAIR': 'Fair',
        'NewRelicPerformanceReport.APDEX_POOR': 'Poor',
        'NewRelicPerformanceReport.APDEX_UNACCEPTABLE': 'Unacceptable',
        'NewRelicPerformanceReport.ERROR_RATE': 'Error Rate',
        'NewRelicPerformanceReport.ERROR_RATE_VALUE': 'Error Rate: %s',
        'NewRelicPerformanceReport.ERRORS_PER_MIN': 'Errors Per Minute: %s',
        'NewRelicPerformanceReport.REQUESTS_PER_MIN': 'Requests Per Minute: %s',
        'NewRelicPerformanceReport.ERROR_RATE_WARN': 'Error Rate is above acceptable levels over the last 30 minutes',
        'NewRelicPerformanceReport.ERROR_RATE_CRIT': 'Error Rate is well above acceptable levels over the last 30 minutes',
        'NewRelicPerformanceReport.APDEX_WARN': 'Server Apdex is below acceptable levels over the last 30 minutes',
        'NewRelicPerformanceReport.APDEX_CRIT': 'Server Apdex is well below acceptable levels over the last 30 minutes'
    });
}