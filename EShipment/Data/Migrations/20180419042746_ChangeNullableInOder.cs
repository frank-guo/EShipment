using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EShipment.Data.Migrations
{
    public partial class ChangeNullableInOder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "date",
                table: "OrderStatus",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<float>(
                name: "Weight",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(float));

            migrationBuilder.AlterColumn<int>(
                name: "NumbOfGoods",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<float>(
                name: "Measurement",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(float));

            migrationBuilder.AlterColumn<DateTime>(
                name: "ETD",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "ETA",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "date",
                table: "OrderStatus",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<float>(
                name: "Weight",
                table: "Orders",
                nullable: false,
                oldClrType: typeof(float),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "NumbOfGoods",
                table: "Orders",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<float>(
                name: "Measurement",
                table: "Orders",
                nullable: false,
                oldClrType: typeof(float),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "ETD",
                table: "Orders",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "ETA",
                table: "Orders",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
