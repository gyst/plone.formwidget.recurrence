from zope.i18n import translate
from plone.formwidget.recurrence import pfr_message, pl_message

PARAMETERS = u"""{{
display_label_unactivate: '{display_label_unactivate}',
display_label_activate: '{display_label_activate}',
edit: '{edit}',
recurrence_type: '{recurrence_type}',
daily_interval_1: '{daily_interval_1}',
daily_interval_2: '{daily_interval_2}',
weekly_interval_1: '{weekly_interval_1}',
weekly_interval_2: '{weekly_interval_2}',
weekly_weekdays: '{weekly_weekdays}',
monthly_day_of_month_1: '{monthly_day_of_month_1}',
monthly_day_of_month_2: '{monthly_day_of_month_2}',
monthly_day_of_month_3: '{monthly_day_of_month_3}',
monthly_day_of_month_4: '{monthly_day_of_month_4}',
monthly_weekday_of_month_1: '{monthly_weekday_of_month_1}',
monthly_weekday_of_month_2: '{monthly_weekday_of_month_2}',
monthly_weekday_of_month_3: '{monthly_weekday_of_month_3}',
monthly_weekday_of_month_4: '{monthly_weekday_of_month_4}',
yearly_day_of_month_1: '{yearly_day_of_month_1}',
yearly_day_of_month_2: '{yearly_day_of_month_2}',
yearly_day_of_month_3: '{yearly_day_of_month_3}',
yearly_weekday_of_month_1: '{yearly_weekday_of_month_1}',
yearly_weekday_of_month_2: '{yearly_weekday_of_month_2}',
yearly_weekday_of_month_3: '{yearly_weekday_of_month_3}',
yearly_weekday_of_month_4: '{yearly_weekday_of_month_4}',
range_label: '{range_label}',
range_no_end_label: '{range_no_end_label}',
range_by_occurrences_label_1: '{range_by_occurrences_label_1}',
range_by_occurrences_label_2: '{range_by_occurrences_label_2}',
range_by_end_date_label: '{range_by_end_date_label}',
cancel_button_label: '{cancel_button_label}',
save_button_label: '{save_button_label}',
order_indexes: [
    '{order_indexes_first}', '{order_indexes_second}', '{order_indexes_third}',
    '{order_indexes_fourth}', '{order_indexes_last}'],
months: [
    '{month_january}', '{month_february}', '{month_march}', '{month_april}',
    '{month_may}', '{month_june}', '{month_july}', '{month_august}',
    '{month_september}', '{month_october}', '{month_november}', '{month_december}'],
weekdays: [
    '{day_monday}', '{day_tuesday}', '{day_wednesday}', '{day_thirsday}',
    '{day_friday}', '{day_saturday}', '{day_sunday}'],
long_date_format: '{long_date_format}',
short_date_format: '{short_date_format}',
no_template_match: '{no_template_match}',
rtemplate: {{
    daily: '{template_daily}',
    mondayfriday: '{template_mondayfriday}',
    weekdays: '{template_weekdays}',
    weekly: '{template_weekly}',
    monthly: '{template_monthly}',
    yearly: '{template_yearly}',
    }}
}}"""

# We can create the messages on startup, although translations
# need to be done per request:
messages = {
    'display_label_unactivate': pfr_message(u'display_label_unactivate'),
    'display_label_activate': pfr_message(u'display_label_activate') ,
    'edit': pfr_message(u'edit'),
    'recurrence_type': pfr_message(u'recurrence_type'),
    'daily_interval_1': pfr_message(u'daily_interval_1'),
    'daily_interval_2': pfr_message(u'daily_interval_2'),
    'weekly_interval_1': pfr_message(u'weekly_interval_1'),
    'weekly_interval_2': pfr_message(u'weekly_interval_2'),
    'weekly_weekdays': pfr_message(u'weekly_weekdays'),
    'monthly_day_of_month_1': pfr_message(u'monthly_day_of_month_1'),
    'monthly_day_of_month_2': pfr_message(u'monthly_day_of_month_2'),
    'monthly_day_of_month_3': pfr_message(u'monthly_day_of_month_3'),
    'monthly_day_of_month_4': pfr_message(u'monthly_day_of_month_4'),
    'monthly_weekday_of_month_1': pfr_message(u'monthly_weekday_of_month_1'),
    'monthly_weekday_of_month_2': pfr_message(u'monthly_weekday_of_month_2'),
    'monthly_weekday_of_month_3': pfr_message(u'monthly_weekday_of_month_3'),
    'monthly_weekday_of_month_4': pfr_message(u'monthly_weekday_of_month_4'),
    'yearly_day_of_month_1': pfr_message(u'yearly_day_of_month_1'),
    'yearly_day_of_month_2': pfr_message(u'yearly_day_of_month_2'),
    'yearly_day_of_month_3': pfr_message(u'yearly_day_of_month_3'),
    'yearly_weekday_of_month_1': pfr_message(u'yearly_weekday_of_month_1'),
    'yearly_weekday_of_month_2': pfr_message(u'yearly_weekday_of_month_2'),
    'yearly_weekday_of_month_3': pfr_message(u'yearly_weekday_of_month_3'),
    'yearly_weekday_of_month_4': pfr_message(u'yearly_weekday_of_month_4'),
    'range_label': pfr_message(u'range_label'),
    'range_no_end_label': pfr_message(u'range_no_end_label'),
    'range_by_occurrences_label_1': pfr_message(u'range_by_occurrences_label_1'),
    'range_by_occurrences_label_2': pfr_message(u'range_by_occurrences_label_2'),
    'range_by_end_date_label': pfr_message(u'range_by_end_date_label'),
    'cancel_button_label': pfr_message(u'cancel_button_label'),
    'save_button_label': pfr_message(u'save_button_label'),
    'order_indexes_first': pfr_message(u'order_indexes_first'),
    'order_indexes_second': pfr_message(u'order_indexes_second'),
    'order_indexes_third': pfr_message(u'order_indexes_third'),
    'order_indexes_fourth': pfr_message(u'order_indexes_fourth'),
    'order_indexes_last': pfr_message(u'order_indexes_last'),
    'month_january': pl_message(u'month_jan'),
    'month_february': pl_message(u'month_feb'),
    'month_march': pl_message(u'month_mar'),
    'month_april': pl_message(u'month_apr'),
    'month_may': pl_message(u'month_may'),
    'month_june': pl_message(u'month_jun'),
    'month_july': pl_message(u'month_jul'),
    'month_august': pl_message(u'month_aug'),
    'month_september': pl_message(u'month_sep'),
    'month_october': pl_message(u'month_oct'),
    'month_november': pl_message(u'month_nov'),
    'month_december': pl_message(u'month_dec'),
    'day_monday': pl_message(u'weekday_mon'),
    'day_tuesday': pl_message(u'weekday_tue'),
    'day_wednesday': pl_message(u'weekday_wed'),
    'day_thirsday': pl_message(u'weekday_thu'),
    'day_friday': pl_message(u'weekday_fri'),
    'day_saturday': pl_message(u'weekday_sat'),
    'day_sunday': pl_message(u'weekday_sun'),
    'long_date_format': pl_message(u'date_format_long'),
    'short_date_format': pl_message(u'date_format_short'),
    'no_template_match': pfr_message(u'no_template_match'),
    'template_daily': pfr_message(u'template_daily'),
    'template_mondayfriday': pfr_message(u'template_mondayfriday'),
    'template_weekdays': pfr_message(u'template_weekdays'),
    'template_weekly': pfr_message(u'template_weekly'),
    'template_monthly': pfr_message(u'template_monthly'),
    'template_yearly': pfr_message(u'template_yearly'),
} 

# = translate(messages['display_label_unactivate'], context=request),
def translations(request):
    xlated = dict([(msg, translate(messages[msg], context=request)) for msg in messages])
    return PARAMETERS.format(**xlated)

