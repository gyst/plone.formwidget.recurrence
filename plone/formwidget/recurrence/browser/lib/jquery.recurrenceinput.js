/**
 * http://garbas.github.com/jquery.recurrenceinput.js
 *
 * Author: Rok Garbas <rok@garbas.si>
 * Since: Sep 2010
 * Date: XX-XX-XXXX
 */
(function($) {

    var today = new Date();
    var basename = 'recurrenceinput';

    /**
     * Configurable values
     */
    var default_conf = {
        // STRING TO BE TRANSLATED
        i18n: {
            display_label_unactivate: 'This event does not repeat.',
            display_label_activate: 'This event repeats ',

            freq_daily: 'Daily',
            freq_weekly: 'Weekly',
            freq_monthly: 'Monthly',
            freq_yearly: 'Yearly',

            daily_interval: 'Every [INPUT] days.',

            weekly_interval: 'Every [INPUT1] week(s) on:',

//            monthly_day_of_month: 'Day ${INPUT1} of the month, every ${INPUT2} month(s).',
            monthly_day_of_month: 'Day [INPUT1] of the month, every [INPUT2] month(s).',
            monthly_weekday_of_month: 'The [INPUT1] [INPUT2], every [INPUT3] month(s)',

            yearly_day_of_month: 'Every [INPUT1] [INPUT2]',
            yearly_weekday_of_month: 'The [INPUT1] [INPUT2] of [INPUT3]',
            yearly_weekday_of_month_weekday: 'Weekday',
            yearly_weekday_of_month_weekend_day: 'Weekend Day',

            range_label: 'End recurrence',
            range_no_end_label: 'No end',
            range_by_occurences_label: 'End after [INPUT] occurence(s)',
            range_by_end_date_label: 'End by: ',

            cancel_button_label: 'Cancel',
            save_button_label: 'Save',

            order_indexes: ['First', 'Second', 'Third', 'Fourth', 'Last'],
            months: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'],
            weekdays: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday', 'Sunday']
        },

        // FORM OVERLAY
        form_overlay: {
           speed: 'fast',
           mask: {
               color: '#ebecff',
               loadSpeed: 'fast',
               closeSpeed: 'fast',
               opacity: 0.5
           }
        },

        range_by_end_date_calendar: {
            yearRange: [-10, 10],
            selectors: true,
            trigger: true
        },

        order_indexes: ['+1', '+2', '+3', '+4', '-1'],
        weekdays: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],

        // FIELD VALUES
        field: {
            display_name: basename+'_display',
            display_text: null,

            freq_name: basename+'_freq',
            freq_daily_value: 'DAILY',
            freq_weekly_value: 'WEEKLY',
            freq_monthly_value: 'MONTHLY',
            freq_yearly_value: 'YEARLY',

            daily_interval_name: basename+'_daily_interval',
            daily_interval_value: '1',

            weekly_interval_name: basename+'_weekly_interval',
            weekly_interval_value: '1',
            weekly_weekdays_name: basename+'_weekly_weekdays',

            monthly_type_name: basename+'_monthly_type',
            monthly_day_of_month_value: 'DAY_OF_MONTH',
            monthly_day_of_month_name: basename+'_monthly_day_of_month',
            monthly_day_of_month_interval_value: '1',
            monthly_day_of_month_interval_name: basename+'_monthly_day_of_month_interval',
            monthly_weekday_of_month_value: 'WEEKDAY_OF_MONTH',
            monthly_weekday_of_month_index_name: basename+'_monthly_weekday_of_month_index',
            monthly_weekday_of_month_name: basename+'_monthly_weekday_of_month',
            monthly_weekday_of_month_interval_name: basename+'_monthly_weekday_of_month_interval',
            monthly_weekday_of_month_interval_value: '1',

            yearly_type_name: basename+'_yearly_type',
            yearly_day_of_month_value: 'DAY_OF_MONTH',
            yearly_day_of_month_bymonth_name: basename+'_yearly_day_of_month_bymonth',
            yearly_day_of_month_bymonthday_name: basename+'_yearly_day_of_month_bymonthday',
            yearly_weekday_of_month_value: 'WEEKDAY_OF_MONTH',
            yearly_weekday_of_month_index_name: basename+'_yearly_weekday_of_month_index',
            yearly_weekday_of_month_day_name: basename+'_yearly_weekday_of_month_day',
            yearly_weekday_of_month_month_name: basename+'_yearly_weekday_of_month_month',

            range_type_name: basename+'_range_type',
            range_by_end_date_year_name: basename+'_range_by_end_date_year',
            range_by_end_date_month_name: basename+'_range_by_end_date_month',
            range_by_end_date_day_name: basename+'_range_by_end_date_day',
            range_by_end_date_calendar_name: basename+'_range_by_end_date_calendar',
            range_no_end: 'NO_END_DATE',
            range_by_ocurrences: 'BY_OCURRENCES',
            range_by_end_date: 'BY_END_DATE',
            range_by_ocurrences_name: basename+'range_by_ocurrences',
            range_by_ocurrences_value: '10',
            range_by_end_date_year_value: today.getFullYear(),
            range_by_end_date_month_value: today.getMonth(),
            range_by_end_date_day_value: today.getDate(),
            
            cancel_button_name: basename + '_cancel',
            save_button_name: basename + '_save'
        },

        // TEMPATE NAMES
        template: {
            form: '#jquery-recurrenceinput-form-tmpl',
            display: '#jquery-recurrenceinput-display-tmpl',
            dateinput: '#collective-z3cform-dateinput-tmpl'
        },

        // CLASS NAMES
        klass: {
            clear: basename+'_clear',

            display: basename+'_display',
            display_text: basename+'_display_text',

            form: basename+'_form',
            freq: basename+'_freq',
            freq_options: basename+'_freq_options',
            freq_option_active: basename+'_freq_option_active',
            freq_daily: basename+'_freq_daily',
            freq_weekly: basename+'_freq_weekly',
            freq_monthly: basename+'_freq_monthly',
            freq_yearly: basename+'_freq_yearly',

            weekly_interval: basename+'_weekly_interval',
            weekly_weekdays: basename+'_weekly_weekdays',

            range: basename+'_range',
            range_type: basename+'_range_type',
            range_by_ocurrences: basename+'_range_by_ocurrences',
            range_by_end_date: basename+'_range_by_end_date',

            cancel_button: basename+'_cancel_button',
            save_button: basename+'_save_button'
        }
    };
//    $.template('monthly_day_of_month', default_conf.i18n.monthly_day_of_month);

    /**
     * Loading (populating) widget from RFC2554 string
     */
    function load_from_rfc2445(el, data, conf) {
        var matches = /FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.exec(data);
        var frequency = matches[1];
        var able_to_parse = false;

        interval = null;
        matches = /INTERVAL=([0-9]+);?/.exec(data);
        if (matches) {
            interval = matches[1];
        }

        byday = null;
        matches = /BYDAY=([^;]+);?/.exec(data);
        if (matches) {
            byday = matches[1];
        }

        bymonthday = null;
        matches = /BYMONTHDAY=([^;]+);?/.exec(data);
        if (matches) {
            bymonthday = matches[1].split(',');
        }

        bymonth = null;
        matches = /BYMONTH=([^;]+);?/.exec(data);
        if (matches) {
            bymonth = matches[1].split(',');
        }

        bysetpos = null;
        matches = /BYSETPOS=([^;]+);?/.exec(data);
        if (matches) {
            bysetpos = matches[1];
        }

        switch (frequency) {
            case 'DAILY':
            case 'WEEKLY':
            case 'MONTHLY':
            case 'YEARLY':
                $('input[name='+conf.field.freq_name+']', el).val([frequency]);
                $('input[value='+frequency+']', el).change();
            break;
        }

        switch (frequency) {
            case 'DAILY':
                if (interval) {
                    $('input[name='+conf.field.daily_interval_name+']', el).val(interval);
                    able_to_parse = true;
                }
                break;
            case 'WEEKLY':
                if (interval) {
                    $('input[name='+conf.field.weekly_interval_name+']', el).val(interval);
                    able_to_parse = true;
                }
                if (byday) { 
                    // TODO: if this is weekdays and interval=null, select DAILY#weekdays?
                    $('input[name='+conf.field.weekly_weekdays_name+']', el).val(byday.split(','));
                    able_to_parse = true;
                }
                break;
            case 'MONTHLY':
                if (bymonthday && interval) { // Day X of the month, every Y months
                    $('input[name='+conf.field.monthly_type_name+']', el).val(['DAY_OF_MONTH']);
                    $('select[name='+conf.field.monthly_day_of_month_name+']', el).val(bymonthday);
                    $('input[name='+conf.field.monthly_day_of_month_interval_name+']', el).val(interval);
                    able_to_parse = true;
                }
                else if (byday && bysetpos && interval) {
                    $('input[name='+conf.field.monthly_type_name+']', el).val(['WEEKDAY_OF_MONTH']);
                    $('input[name='+conf.field.monthly_weekday_of_month_interval_name+']', el).val(interval);
                    $('select[name='+conf.field.monthly_weekday_of_month_index_name+']', el).val(bysetpos);
                    if (byday === 'MO,TU,WE,TH,FR') {
                        $('select[name='+conf.field.monthly_weekday_of_month_name+']', el).val('WEEKDAY');
                        able_to_parse = true;
                    }
                    else if (byday === 'SA,SU') {
                        $('select[name='+conf.field.monthly_weekday_of_month_name+']', el).val('WEEKEND_DAY');
                        able_to_parse = true;
                    }
                }
                else if (byday && interval) { // The Nth X of the month, every Y months
                    $('input[name='+conf.field.monthly_type_name+']', el).val(['WEEKDAY_OF_MONTH']);
                    $('input[name='+conf.field.monthly_weekday_of_month_interval_name+']', el).val(interval);
                    matches = /^([+\-]?[0-9]+)([A-Z]{1,2}$)/.exec(byday); // we expect this to be -1TH
                    if (!matches || matches.length != 3) {
                        break; // don't understand the format
                    }
                    $('select[name='+conf.field.monthly_weekday_of_month_index_name+']', el).val(matches[1]);
                    $('select[name='+conf.field.monthly_weekday_of_month_name+']', el).val(matches[2]);
                    able_to_parse = true;
                }
                break;
            case 'YEARLY':
                if (bymonth && bymonthday) { // Every [January] [1]
                    $('input[name='+conf.field.yearly_type_name+']', el).val(['DAY_OF_MONTH']);
                    $('select[name='+conf.field.yearly_day_of_month_bymonth_name+']', el).val(bymonth);
                    $('select[name='+conf.field.yearly_day_of_month_bymonthday_name+']', el).val(bymonthday);
                    able_to_parse = true;
                }
                else if (byday && bysetpos && bymonth) {
                    $('select[name='+conf.field.yearly_weekday_of_month_month_name+']', el).val(bymonth);
                    $('select[name='+conf.field.yearly_weekday_of_month_index_name+']', el).val(bysetpos);
                    if (byday === 'MO,TU,WE,TH,FR') {
                        $('select[name='+conf.field.yearly_weekday_of_month_day_name+']', el).val('WEEKDAY');
                        able_to_parse = true;
                    }
                    else if (byday === 'SA,SU') {
                        $('select[name='+conf.field.yearly_weekday_of_month_day_name+']', el).val('WEEKEND_DAY');
                        able_to_parse = true;
                    }
                }
                else if (bymonth && byday) {
                    $('input[name='+conf.field.yearly_type_name+']', el).val(['WEEKDAY_OF_MONTH']);
                    $('select[name='+conf.field.yearly_weekday_of_month_month_name+']', el).val(bymonth);
                    matches = /^([+\-]?[0-9]+)([A-Z]{1,2}$)/.exec(byday); // we expect this to be -1TH
                    if (matches && matches.length == 3) {
                        $('select[name='+conf.field.yearly_weekday_of_month_index_name+']', el).val(matches[1]);
                        $('select[name='+conf.field.yearly_weekday_of_month_day_name+']', el).val(matches[2]);
                        able_to_parse = true;
                    }
                }
                break;
        }

        count = null;
        matches = /COUNT=([^;]+);?/.exec(data);
        if (matches) {
            count = matches[1];
        }

        until = null;
        matches = /UNTIL=([^;]+);?/.exec(data);
        if (matches) {
            until = matches[1];
        }

        // RANGE
        if (count) {
            $('input[name='+conf.field.range_type_name+']', el).val(['BY_OCURRENCES']);
            $('input[name='+conf.field.range_by_ocurrences_name+']', el).val(count);
        }
        else if (until) {
            $('input[name='+conf.field.range_type_name+']', el).val(['BY_END_DATE']);
            until = new Date(until.slice(0,4), until.slice(4,6), until.slice(6,8));
            $('input[name='+conf.field.range_by_end_date_year_name+']', el).val(until.getFullYear());
            $('select[name='+conf.field.range_by_end_date_month_name+']', el).val(until.getMonth());
            $('input[name='+conf.field.range_by_end_date_day_name+']', el).val(until.getDate());
        }
        else {
            $('input[name='+conf.field.range_type_name+']', el).val(['NO_END_DATE']);
        }

        if (!able_to_parse) {
            // TODO: Probably want to throw an exception here
            //alert('Cannot parse! ' + data);
        }
    }

    /**
     * Parsing RFC2554 from widget
     */
    function saverule_to_rfc2445(el, conf) {
        var result = '';
        var frequency = $('input[name='+conf.field.freq_name+']:checked', el).val();
        switch (frequency) {
            case 'DAILY':
                result += 'FREQ=DAILY';
                result += ';INTERVAL=' + $('input[name='+conf.field.daily_interval_name+']', el).val();
                break;
            case 'WEEKLY':
                result += 'FREQ=WEEKLY';
                result += ';INTERVAL=' + $('input[name='+conf.field.weekly_interval_name+']', el).val();
                days = [];
                $('input[name='+conf.field.weekly_weekdays_name+']:checked', el).each(function() {
                    days[days.length] = $(this).val();
                });
                if (days.length) {
                    result += ';BYDAY=' + days;
                }
                break;
            case 'MONTHLY':
                result += 'FREQ=MONTHLY';
                monthly_type = $('input[name='+conf.field.monthly_type_name+']:checked', el).val();
                var day, month, year, interval, index;
                switch (monthly_type) {
                    case 'DAY_OF_MONTH':
                        day = $('select[name='+conf.field.monthly_day_of_month_name+']', el).val();
                        interval = $('input[name='+conf.field.monthly_day_of_month_interval_name+']', el).val();
                        result += ';BYMONTHDAY=' + day;
                        result += ';INTERVAL=' + interval;
                        break;
                    case 'WEEKDAY_OF_MONTH':
                        index = $('select[name='+conf.field.monthly_weekday_of_month_index_name+']', el).val();
                        day = $('select[name='+conf.field.monthly_weekday_of_month_name+']', el).val();
                        interval = $('input[name='+conf.field.monthly_weekday_of_month_interval_name+']', el).val();
                        if ($.inArray(day, ['MO','TU','WE','TH','FR','SA','SU']) > -1) {
                            result += ';BYDAY=' + index + day;
                        }
                        else if (day == 'DAY') {
                            result += ';BYDAY=' + index;
                        }
                        else if (day == 'WEEKDAY') {
                            result += ';BYDAY=MO,TU,WE,TH,FR;BYSETPOS=' + index;
                        }
                        else if (day == 'WEEKEND_DAY') {
                            result += ';BYDAY=SA,SU;BYSETPOS=' + index;
                        }
                        result += ';INTERVAL=' + interval;
                        break;
                }
                break;
            case 'YEARLY':
                result += 'FREQ=YEARLY';
                yearly_type = $('input[name='+conf.field.yearly_type_name+']:checked', el).val();
                switch (yearly_type) {
                    case 'DAY_OF_MONTH':
                        month = $('select[name='+conf.field.yearly_day_of_month_bymonth_name+']', el).val();
                        day = $('select[name='+conf.field.yearly_day_of_month_bymonthday_name+']', el).val();
                        result += ';BYMONTH=' + month;
                        result += ';BYMONTHDAY=' + day;
                        break;
                    case 'WEEKDAY_OF_MONTH':
                        index = $('select[name='+conf.field.yearly_weekday_of_month_index_name+']', el).val();
                        day = $('select[name='+conf.field.yearly_weekday_of_month_day_name+']', el).val();
                        month = $('select[name='+conf.field.yearly_weekday_of_month_month_name+']', el).val();
                        result += ';BYMONTH=' + month;
                        if ($.inArray(day, ['MO','TU','WE','TH','FR','SA','SU']) > -1) {
                            result += ';BYDAY=' + index + day;
                        }
                        else if (day == 'DAY') {
                            result += ';BYDAY=' + index;
                        }
                        else if (day == 'WEEKDAY') {
                            result += ';BYDAY=MO,TU,WE,TH,FR;BYSETPOS=' + index;
                        }
                        else if (day == 'WEEKEND_DAY') {
                            result += ';BYDAY=SA,SU;BYSETPOS=' + index;
                        }
                        break;
                }
                break;
        }

        var range_type = $('input[name='+conf.field.range_type_name+']:checked', el).val();
        switch (range_type) {
            case 'BY_OCURRENCES':
                result += ';COUNT=' + $('input[name='+conf.field.range_by_ocurrences_name+']').val();
                break;
            case 'BY_END_DATE':
                year = $('input[name='+conf.field.range_by_end_date_year_name+']').val();
                month = $('select[name='+conf.field.range_by_end_date_month_name+']').val();
                day = $('input[name='+conf.field.range_by_end_date_day_name+']').val();
                if (month < 10) {
                    month = '0' + month;
                }
                if (day < 10) {
                    day = '0' + day;
                }
                result += ';UNTIL='+year+month+day+'T000000';
                break;
        }

        if (result.length > 0) {
            return 'RRULE:' + result;
        }
        return '';
    }

    /**
     * RecurrenceInput - form, display and tools for recurrenceinput widget
     */
    function RecurrenceInput(conf) {

        var self = this;
        var display = $(conf.template.display).tmpl(conf);                      // display part of the widget
        var form = $(conf.template.form).tmpl(conf);                            // recurrence form (will be displayed in overlay


        function clickableLabel() {                                             //  and on click select radion button
            $(this).parent().find('> input').click().change();
        }
        form.find('ul.'+conf.klass.freq+' label').click(clickableLabel);
        
        display.find('em').click(function() {
            form.overlay().load();
        });

        overlay_conf = $.extend(conf.form_overlay, {});
        form.hide().overlay(overlay_conf)
        
        display.find('input[name='+conf.field.display_name+']')                 // show form overlay on change of display radio box 
            .click(function() {
            form.overlay().load();
        });


        form.find('input[name='+conf.field.freq_name+']')                       // frequency options 
            .change(function(e) {
                form.find('div.'+conf.klass.freq_options+' > div').hide();
                form.find($(this).attr('ref')).show()
                    .addClass(conf.klass.freq_option_active);
        });

        form.find('input[name='+conf.field.range_by_end_date_calendar_name+']') // activate Datetime input for c.z3cform.datetimewidget like widget
            .dateinput($.extend(conf.range_by_end_date_calendar, {
                value: new Date(
                    conf.field.range_by_end_date_year_value,
                    conf.field.range_by_end_date_month_value,
                    conf.field.range_by_end_date_day_value
                ),
                change: function() {
                    var value = this.getValue('yyyy-m-d').split('-');
                    var el = this.getInput().parent();
                    el.find('input=[name='+conf.field.range_by_end_date_year_name+']').val(value[0]);                   // populate calendar fields
                    el.find('select=[name='+conf.field.range_by_end_date_month_name+']').val(value[1]);
                    el.find('input=[name='+conf.field.range_by_end_date_day_name+']').val(value[2]);
                }
//                onShow: function () {
//                    var trigger_offset = $(this).next().offset();
//                    $(this).data('dateinput').getCalendar()                     // position calendar dateinput widget
//                        .offset({
//                            top: trigger_offset.top+33,
//                            left: trigger_offset.left
//                        });
//                }
            }));

        form.find('input[name='+conf.field.save_button_name+']')
            .click(function(e) {
                e.preventDefault();
                save();
        });

        
        /**
         * Saving data selected in form and returning RFC2554 string
         */
        function save() {
            form.overlay().close();                                             // close overlay
            var RFC2554 = saverule_to_rfc2445(form, conf);
            form.textarea.val(RFC2554);
        }


        /**
         * Loading (populating) display and form widget with
         * passed RFC2554 string (data)
         */
        function load(data) {
            if (data) {
                load_from_rfc2445(form, data, conf);
//                alert('load_from_rfc2445 should be moved here!');               // FIXME:
            }// else {
//                alert('we should load default values. FREQ');
//            }
        }


        /*
         * Public API of RecurrenceInput
         */
        $.extend(self, {
            display: display,
            form: form, 
            load: load,
            save: save
        });

    }



    /*
     * jQuery plugin implementation
     */
    $.fn.recurrenceinput = function(conf) {
        if (this.data('recurrenceinput')) { return this; }                      // plugin already installed
        conf = $.extend(default_conf, conf);                                    // "compile" configuration for widget
        this.each(function() {                                                  // apply this for every textarea
            var textarea = $(this);
            if (textarea[0].type == 'textarea') {
                var recurrenceinput = new RecurrenceInput(conf);                // our recurrenceinput widget instance
                recurrenceinput.form.appendTo('body');                          // hide textarea and place display_widget after textarea
                recurrenceinput.textarea = textarea;
                recurrenceinput.form.textarea = textarea;
                var data = textarea.val();
                recurrenceinput.load(data);                           // load data provided by textarea
                var widget = textarea.closest('.ArchetypesRecurrenceWidget');
                textarea.hide();
                widget.after(recurrenceinput.display);                 // hide textarea and place display_widget after textarea
            }
        });
    };

})(jQuery);
