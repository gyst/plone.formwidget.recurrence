<script>
    <div class="recurrenceinput_form">
        <form>

            <div id="recurrenceinput_rtemplate">
                <label for="${name}_rtemplate">
                    ${i18n.recurrence_type}
                    <select name="recurrenceinput_rtemplate">
                        {{each rtemplate}}
                            <option value="${$index}">${i18n.rtemplate[$index]}</value>
                        {{/each}}
                    </select>
                </label>
            <div>
        
            <div id="recurrenceinput_daily_interval" class="recurrenceinput_field">
                <label for="${name}_daily_interval">
                    ${i18n.daily_interval_1}
                    <input type="text" size="2"
                        value="1"
                        name="recurrenceinput_daily_interval"
                        id="${name}_daily_interval" />
                    ${i18n.daily_interval_2}
                </label>
            </div>

            <div id="recurrenceinput_weekly_interval" class="recurrenceinput_field">
                <label for="${name}_weekly_interval">
                    ${i18n.weekly_interval_1}
                    <input type="text" size="2"
                        value="1"
                        name="recurrenceinput_weekly_interval"
                        id="${name}_weekly_interval"/>
                    ${i18n.weekly_interval_2}
                </label>
            </div>
            <div id="recurrenceinput_weekly_weekdays" class="recurrenceinput_field">
                <label for="${name}_weekly_interval">${i18n.weekly_weekdays}</label>
                {{each i18n.weekdays}}
                    <input type="checkbox"
                        name="recurrenceinput_weekly_weekdays_${weekdays[$index]}"
                        id="${name}_weekly_weekdays_${weekdays[$index]}"
                        value="${weekdays[$index]}" />
                    <label for="${name}_weekly_weekdays_${weekdays[$index]}">${$value}</label>
                    {{if $index==3}}<br/>{{/if}}
                {{/each}}
                </ul>
            </div>
    
            <div id="recurrenceinput_monthly_options" class="recurrenceinput_field">
                <div>
                    <input
                        type="radio"
                        value="DAY_OF_MONTH"
                        name="recurrenceinput_monthly_type"
                        id="${name}_monthly_type:DAY_OF_MONTH" />
                    <label for="${name}_monthly_type:DAY_OF_MONTH">
                        ${i18n.monthly_day_of_month_1}
                        <select name="recurrenceinput_monthly_day_of_month_day"
                            id="${name}_monthly_day_of_month_day">
                        {{each [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
                                18,19,20,21,22,23,24,25,26,27,28,29,30,31]}}
                            <option value="${$value}">${$value}</option>
                        {{/each}}
                        </select>
                        ${i18n.monthly_day_of_month_2}${i18n.monthly_day_of_month_3}
                        <input type="text" size="2"
                            value="1" 
                            name="recurrenceinput_monthly_day_of_month_interval"/>
                        ${i18n.monthly_day_of_month_4}
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="WEEKDAY_OF_MONTH"
                        name="recurrenceinput_monthly_type"
                        id="${name}_monthly_type:WEEKDAY_OF_MONTH" />
                    <label for="${name}_monthly_type:WEEKDAY_OF_MONTH">
                        ${i18n.monthly_weekday_of_month_1}
                        <select name="recurrenceinput_monthly_weekday_of_month_index">
                        {{each i18n.order_indexes}}
                            <option value="${order_indexes[$index]}">${$value}</option>
                        {{/each}}
                        </select>
                        ${i18n.monthly_weekday_of_month_2}
                        <select name="recurrenceinput_monthly_weekday_of_month">
                        {{each i18n.weekdays}}
                            <option value="${weekdays[$index]}">${$value}</option>
                        {{/each}}
                        </select>
                        ${i18n.monthly_weekday_of_month_3}
                        <input type="text" size="2"
                            value="1"
                            name="recurrenceinput_monthly_weekday_of_month_interval" />
                        ${i18n.monthly_weekday_of_month_4}
                    </label>
                </div>
            </div>
    
            <div id="recurrenceinput_yearly_options" class="recurrenceinput_field">
                <div>
                    <input
                        type="radio"
                        value="DAY_OF_MONTH"
                        name="recurrenceinput_yearly_type"
                        id="${name}_yearly_type:DAY_OF_MONTH" />
                    <label for="${name}_yearly_type:DAY_OF_MONTH">
                        ${i18n.yearly_day_of_month_1}
                        <select name="recurrenceinput_yearly_day_of_month">
                        {{each i18n.months}}
                            <option value="${$index+1}">${$value}</option>
                        {{/each}}
                        </select>
                        ${i18n.yearly_day_of_month_2}
                        <select name="recurrenceinput_yearly_day_of_month_index">
                        {{each [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
                                18,19,20,21,22,23,24,25,26,27,28,29,30,31]}}
                            <option value="${$value}">${$value}</option>
                        {{/each}}
                        </select>
                        ${i18n.yearly_day_of_month_3}
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="WEEKDAY_OF_MONTH"
                        name="recurrenceinput_yearly_type"
                        id="${name}_yearly_type:WEEKDAY_OF_MONTH"/>
                    <label for="${name}_yearly_type:WEEKDAY_OF_MONTH">
                        ${i18n.yearly_weekday_of_month_1}
                    </label>
                    <select name="recurrenceinput_yearly_weekday_of_month_index">
                    {{each i18n.order_indexes}}
                        <option value="${order_indexes[$index]}">${$value}</option>
                    {{/each}}
                    </select>
                    <label for="${name}_yearly_type:WEEKDAY_OF_MONTH">
                        ${i18n.yearly_weekday_of_month_2}
                        <select name="recurrenceinput_yearly_weekday_of_month_day">
                        {{each i18n.weekdays}}
                            <option value="${weekdays[$index]}">${$value}</option>
                        {{/each}}
                        </select>
                        ${i18n.yearly_weekday_of_month_3}
                        <select name="recurrenceinput_yearly_weekday_of_month_month">
                        {{each i18n.months}}
                            <option value="${$index+1}">${$value}</option>
                        {{/each}}
                        </select>
                        ${i18n.yearly_weekday_of_month_4}
                    </label>                    
                </div>
            </div>
                
            <div id="recurrenceinput_range_options" class="recurrenceinput_field">
                <label>${i18n.range_label}</label>
                <div>
                    <input
                        type="radio"
                        value="NO_END_DATE"
                        name="recurrenceinput_range_type"
                        id="${name}_range_type:NO_END_DATE"/>
                    <label for="${name}_range_type:NO_END_DATE">
                        ${i18n.range_no_end_label}
                    </label>                    
                </div>
                <div>
                    <input
                        type="radio"
                        value="BY_OCCURRENCES"
                        name="recurrenceinput_range_type"
                        id="${name}_range_type:BY_OCCURRENCES"/>
                    <label for="${name}_range_type:BY_OCCURRENCES">
                        ${i18n.range_by_occurrences_label_1}
                        <input
                            type="text" size="3"
                            value="10"
                            name="recurrenceinput_range_by_occurrences_value" />
                        ${i18n.range_by_occurrences_label_2}
                    </label>                    
                </div>
                <div>
                    <input
                        type="radio"
                        value="BY_END_DATE"
                        name="recurrenceinput_range_type"
                        id="${name}_range_type:BY_END_DATE"/>
                    <label for="${name}_range_type:BY_END_DATE">
                        ${i18n.range_by_end_date_label}
                    </label>                    
                    <input
                        type="date" 
                        name="recurrenceinput_range_by_end_date_calendar" />
                </div>
            </div>
        
            <div class="recurrenceinput_buttons">
                <input
                    type="submit"
                    class="recurrenceinput_cancel_button allowMultiSubmit"
                    value="${i18n.cancel_button_label}" />
                <input
                    type="submit"
                    class="recurrenceinput_save_button allowMultiSubmit"
                    value="${i18n.save_button_label}" />
            </div>
        </form>
    </div>
</script>