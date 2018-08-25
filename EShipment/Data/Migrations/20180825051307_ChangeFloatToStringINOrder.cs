using Microsoft.EntityFrameworkCore.Migrations;

namespace EShipment.Data.Migrations
{
    public partial class ChangeFloatToStringINOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Weight",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(float),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Measurement",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(float),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Weight",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<float>(
                name: "Measurement",
                table: "Orders",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
