import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table-drag',
  templateUrl: './table-drag.component.html',
  styleUrls: ['./table-drag.component.css']
})
export class TableDragComponent implements OnInit {

  // 表格数据，从DataGrip导出为JSON
  // 获取数据的SQL是：SELECT * FROM gsms.table_style WHERE table_name IN ('bill_main','bill_detail');
  tableData = [
    {
      "iid": 52,
      "table_name": "bill_main",
      "field_name": "iid",
      "display_field": "iid",
      "text": "自增主键",
      "width_percent": 0.0,
      "immutable": 1,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:49",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 53,
      "table_name": "bill_main",
      "field_name": "bill_code",
      "display_field": "bill_code",
      "text": "单据编号",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:49",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 54,
      "table_name": "bill_main",
      "field_name": "bill_date",
      "display_field": "bill_date",
      "text": "单据日期",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "yyyy-MM-dd",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:49",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "date",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 55,
      "table_name": "bill_main",
      "field_name": "remark",
      "display_field": "remark",
      "text": "备注1",
      "width_percent": 0.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:49",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 56,
      "table_name": "bill_main",
      "field_name": "bill_desc",
      "display_field": "bill_desc",
      "text": "摘要",
      "width_percent": 100.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:49",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 57,
      "table_name": "bill_main",
      "field_name": "number_plate",
      "display_field": "number_plate",
      "text": "车牌号",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 58,
      "table_name": "bill_main",
      "field_name": "driver",
      "display_field": "driver",
      "text": "驾驶员",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 59,
      "table_name": "bill_main",
      "field_name": "loader",
      "display_field": "loader",
      "text": "装卸工",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 60,
      "table_name": "bill_main",
      "field_name": "payer",
      "display_field": "payer",
      "text": "付款方",
      "width_percent": 80.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 61,
      "table_name": "bill_main",
      "field_name": "freight",
      "display_field": "freight",
      "text": "运费",
      "width_percent": 60.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 62,
      "table_name": "bill_main",
      "field_name": "creator",
      "display_field": "creator",
      "text": "制单人",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 63,
      "table_name": "bill_main",
      "field_name": "operator",
      "display_field": "operator",
      "text": "经手人",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 64,
      "table_name": "bill_main",
      "field_name": "settlement_method",
      "display_field": "settlement_method",
      "text": "结算方式",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 65,
      "table_name": "bill_main",
      "field_name": "settlement_qty",
      "display_field": "settlement_qty",
      "text": "结算数量",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:30:50",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 66,
      "table_name": "bill_detail",
      "field_name": "iid",
      "display_field": "iid",
      "text": "自增主键",
      "width_percent": 120.0,
      "immutable": 1,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 67,
      "table_name": "bill_detail",
      "field_name": "fid",
      "display_field": "fid",
      "text": "主表外键",
      "width_percent": 120.0,
      "immutable": 1,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 68,
      "table_name": "bill_detail",
      "field_name": "goods_sid",
      "display_field": "goods_name",
      "text": "品种",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 5,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 69,
      "table_name": "bill_detail",
      "field_name": "goods_name",
      "display_field": "goods_name",
      "text": "品种名称",
      "width_percent": 120.0,
      "immutable": 1,
      "seq": 6,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 70,
      "table_name": "bill_detail",
      "field_name": "specification",
      "display_field": "specification",
      "text": "规格",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 8,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 71,
      "table_name": "bill_detail",
      "field_name": "model_type",
      "display_field": "model_type",
      "text": "型号",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 9,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 72,
      "table_name": "bill_detail",
      "field_name": "batch_number",
      "display_field": "batch_number",
      "text": "批次号",
      "width_percent": 90.0,
      "immutable": 1,
      "seq": 10,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 73,
      "table_name": "bill_detail",
      "field_name": "qty1",
      "display_field": "qty1",
      "text": "数量1",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 11,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "right",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 74,
      "table_name": "bill_detail",
      "field_name": "qty2",
      "display_field": "qty2",
      "text": "数量2",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 12,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "right",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 75,
      "table_name": "bill_detail",
      "field_name": "qty3",
      "display_field": "qty3",
      "text": "数量3",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 13,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "right",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 76,
      "table_name": "bill_detail",
      "field_name": "remark",
      "display_field": "remark",
      "text": "备注",
      "width_percent": 100.0,
      "immutable": 0,
      "seq": 19,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 77,
      "table_name": "bill_detail",
      "field_name": "seq",
      "display_field": "seq",
      "text": "序号",
      "width_percent": 90.0,
      "immutable": 1,
      "seq": 20,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 78,
      "table_name": "bill_detail",
      "field_name": "create_time",
      "display_field": "create_time",
      "text": "创建时间",
      "width_percent": 100.0,
      "immutable": 1,
      "seq": 0,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 79,
      "table_name": "bill_detail",
      "field_name": "bill_type_sid",
      "display_field": "bill_type_name",
      "text": "单据类型",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 1,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 80,
      "table_name": "bill_detail",
      "field_name": "bill_type_name",
      "display_field": "bill_type_name",
      "text": "单据类型名称",
      "width_percent": 120.0,
      "immutable": 1,
      "seq": 2,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 81,
      "table_name": "bill_detail",
      "field_name": "client_sid",
      "display_field": "client_name",
      "text": "往来单位",
      "width_percent": 120.0,
      "immutable": 0,
      "seq": 3,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 82,
      "table_name": "bill_detail",
      "field_name": "client_name",
      "display_field": "client_name",
      "text": "往来单位名称",
      "width_percent": 120.0,
      "immutable": 1,
      "seq": 4,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 83,
      "table_name": "bill_detail",
      "field_name": "alias",
      "display_field": "alias",
      "text": "品名",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 7,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 84,
      "table_name": "bill_detail",
      "field_name": "order_number",
      "display_field": "order_number",
      "text": "订单号",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 14,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 85,
      "table_name": "bill_detail",
      "field_name": "delivery_number",
      "display_field": "delivery_number",
      "text": "送货单号",
      "width_percent": 100.0,
      "immutable": 0,
      "seq": 15,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 86,
      "table_name": "bill_detail",
      "field_name": "position",
      "display_field": "position",
      "text": "仓位",
      "width_percent": 90.0,
      "immutable": 0,
      "seq": 16,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 87,
      "table_name": "bill_detail",
      "field_name": "supplier",
      "display_field": "supplier",
      "text": "供应商",
      "width_percent": 100.0,
      "immutable": 0,
      "seq": 17,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    },
    {
      "iid": 88,
      "table_name": "bill_detail",
      "field_name": "transfer_target",
      "display_field": "transfer_target",
      "text": "调拨目标",
      "width_percent": 100.0,
      "immutable": 0,
      "seq": 18,
      "visible": 1,
      "digit": -1,
      "statistics": false,
      "date_formatter": "",
      "bool_column": 1,
      "opts": "",
      "width_primeng_str": "100px",
      "align_header": "center",
      "align_cell": "center",
      "create_time": "2020-05-15 08:36:41",
      "width_zorro": 100.00,
      "width_primeng": 100.00,
      "get_url": "",
      "ctl_type": "input",
      "generate_formula": "",
      "formula_seq": 0,
      "tick_pipe": 0,
      "cn_pipe": false,
      "access_pipe": false,
      "date_pipe": false,
      "tease": "",
      "filter": "",
      "use_formatter": "",
      "digit_formatter": "",
      "data_type": "",
      "default_value": "",
      "rpt_seq": 0
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tableData, event.previousIndex, event.currentIndex);
  }

}
